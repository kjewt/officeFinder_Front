import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { MyOfficeListDropDown } from '../../components/common/MyOfficeListDropDown';
import { OfficeName } from '../../components/booking/Officename';
import { OfficeOptions } from '../../components/booking/OfficeOptions';
import { ReservationAttendeesList } from './ReservationAttendeesList';
import { SalesCharts } from './SalesCharts';



export const SalesAnalysis = () => {

  const [officeName, setOfficeName] = useState("전체")
  const handleOfficeChange = (office: string) => {
    setOfficeName(office);
  };

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6 flex right-11">
          <div className="group py-4">
            <MyOfficeListDropDown width="w-52" onOfficeChange={handleOfficeChange} />
            <hr className="border-primary group-hover:border-transparent" />
          </div>
          <Link to="/AddOffice">
            <Button style="btn btn-primary btn-outline w-40" text="오피스 수정하기" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName} 매출 상세</Title>
        {/* 본문 */}
        <div className="flex flex-col gap-4">
          <div className="p-3 flex justify-between">
            <OfficeName name="오피스A" address="주소" />
            <Link to="/AllReviews"><Button style="btn btn-primary w-40" text="전체 리뷰보기" /></Link>
          </div>
          <OfficeOptions width="" needReviewCount={false} />
          <SalesCharts />
          <ReservationAttendeesList />
        </div>
      </BackgroundCover>
    </>
  );
};
