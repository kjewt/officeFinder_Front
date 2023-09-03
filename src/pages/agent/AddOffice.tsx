import { useState } from 'react'
import { Link } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { OptionsCheckbox } from '../../components/common/OptionsCheckbox';
import { AddOfficePhoto } from '../../components/agent/AddOfficePhoto';
import { AddOfficeAddress } from '../../components/agent/AddOfficeAddress';
import { useAddOfficeHandel } from '../../components/agent/HandelAddOffice'
import { NumberToKoreanConverter } from '../../components/agent/NumberToKorean';
import type { NewOfficePost } from "../../type/agentTypes"

export const AddOffice = () => {
  const [postData, setPostData] = useState<NewOfficePost>()
  const { name, handleOfficeName,
    selectedOptions, handleOptionsChange,
    address, handleAddressChange,
    monthlyPrice, handlePriceChange,
    rooms, handleCountRoomsChange,
    maxCapacity, handleMaxCapacityChange
  } = useAddOfficeHandel();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const SubmitData = () => {
    const updatedData = {
      ...postData,
      officeName: name,
      address: address,
      leaseFee: monthlyPrice,
      maxCapacity: maxCapacity,
      remainRoom: rooms,
      officeOption: selectedOptions,
    };

    setPostData(updatedData);
  }
  console.log(name)
  console.log(`이름: ${name}`)
  console.log(`주소: ${address}`)
  // console.log(`가격: ${monthlyPrisce}`)
  // console.log(`최대인원수: ${maxCapacity}`)
  // console.log(`방개수: ${rooms}`)
  console.log(`옵션: ${selectedOptions}`)
  // console.log(`Office: ${JSON.stringify(selectedOptions)}`);
  console.log(address)

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-10 right-10 flex z-10">
          <Link to="/MyOffice">
            <Button style="btn btn-primary btn-outline w-[90px] md:w-40" text="등록취소" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>새 지점 등록하기</Title>
        <form className="flex flex-col items-center py-8 gap-6" onSubmit={handleSubmit}>
          <Input type="text" width="w-80" inputLabel="공간의 이름을 입력해주세요." inputLabelPosition="text-center" onInputChange={handleOfficeName} />
          <AddOfficeAddress onAddressHandler={handleAddressChange} />
          <div className="">
            <div className="flex justify-center gap-2">
              <p className="text-center text-base">필요한 옵션을 선택하세요.</p>
            </div>
            <OptionsCheckbox onOptionChange={handleOptionsChange} />
          </div>
          <div className="">
            <p className="text-center text-base pb-4">최대 인원수와 오피스의 개수, 가격을 입력하세요.</p>
            <div className="flex flex-col md:flex-row">
              <Input type="number" placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="최대 인원수" onInputChange={handleMaxCapacityChange} />
              <Input type="number" placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="개수" onInputChange={handleCountRoomsChange} />
              <div className="flex flex-col items-center">
                <Input type="text" onInputChange={handlePriceChange} placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="월 가격" />
                {monthlyPrice ? <NumberToKoreanConverter price={monthlyPrice || 0} /> : null}
              </div>
            </div>
          </div>
          <AddOfficePhoto />
          <Button text="등록하기" style="btn btn-primary w-64 mt-2" clickHandler={SubmitData} />
        </form>
      </BackgroundCover>
    </>
  );
};
