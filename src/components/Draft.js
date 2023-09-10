import React from "react";

const Draft = ({ allData }) => {
  const { requistionDetails, jobDetails, interviewSetting } = allData;
  return (
    <div>
      <div className="bg-gray-200 rounded-xl overflow-hidden flex flex-col mb-10">
        <div className="flex justify-between">
          <span className="font-bold text-center p-2 w-[8rem]">Draft</span>
          <span className="bg-red-500 p-2 w-[8rem] text-center text-white">
            Preview
          </span>
        </div>
        <div className="flex justify-between p-2 mx-4 bg-[#432A7C] text-white m-2 rounded-xl">
          <div className="">
            {requistionDetails ? requistionDetails.title : "New Requisition"}
          </div>
          <div className="font-thin">
            OPENINGS{" "}
            <span className="font-bold">
              {requistionDetails ? requistionDetails.openings : 0}
            </span>
          </div>
        </div>
        {/* New Requisition */}
        <div className="m-2 mx-4 p-5 bg-white rounded-xl">
          <div className="font-bold py-2">Requisition Details</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div className="text-gray-500">Urgency</div>
              <span>
                {" "}
                {requistionDetails ? requistionDetails.urgency : "-"}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500">Gender</div>
              <span>{requistionDetails ? requistionDetails.gender : "-"}</span>
            </div>
          </div>
        </div>
        <div className="m-2 mx-4 p-5 bg-white rounded-xl">
          <div className="font-bold py-2">Job Details</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div className="text-gray-500">Job Title</div>
              <span>{jobDetails ? jobDetails.title : "-"}</span>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500">Job Details</div>
              <span>{jobDetails ? jobDetails.details : "-"}</span>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500">Job Location</div>
              <span>{jobDetails ? jobDetails.location : "-"}</span>
            </div>
          </div>
        </div>
        <div className="m-2 mx-4 p-5 bg-white rounded-xl">
          <div className="font-bold py-2">Interview Settings</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div className="text-gray-500">Interview Duration</div>
              <span>{interviewSetting ? interviewSetting.duration : "-"}</span>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500">Interview Language</div>
              <span>{interviewSetting ? interviewSetting.language : "-"}</span>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500">Interview Mode</div>
              <span>{interviewSetting ? interviewSetting.mode : "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
