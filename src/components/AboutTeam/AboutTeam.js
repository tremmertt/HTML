import React from "react";
import "./AboutTeam.css";

export default function AboutTeam() {
  function getTeammember() {
    const members = [
      {
        id: 1,
        name: "Kyo Nguyen",
        role: "CEO",
        avatarPath: "Kyo Nguyen.9dc19ba4.png",
      },
      {
        id: 2,
        name: "Kyo Nguyen",
        role: "CEO",
        avatarPath: "Kyo Nguyen.9dc19ba4.png",
      },
      {
        id: 3,
        name: "Kyo Nguyen",
        role: "CEO",
        avatarPath: "Kyo Nguyen.9dc19ba4.png",
      },
      {
        id: 4,
        name: "Kyo Nguyen",
        role: "CEO",
        avatarPath: "Kyo Nguyen.9dc19ba4.png",
      },
      {
        id: 5,
        name: "Kyo Nguyen",
        role: "CEO",
        avatarPath: "Kyo Nguyen.9dc19ba4.png",
      },
    ];

    const rows = [];
    for (const member of members) {
      rows.push(
        <div className="col-span-1 mx-24" key={member.id}>
          <div className="avatar">
            <img
              className=" avatar-team w-full h-full"
              src={require(`../../img/${member.avatarPath}`)}
              alt=""
            />
          </div>
          <p className="text-xl font-mono font-medium">{member.name} </p>
        </div>
      );
    }
    return rows;
  }
  return (
    <div className="container py-8 mx-auto">
      <div className="grid justify-items-stretch md:justify-items-center">
        <h1 className="text-3xl md:text-6xl sm:text-4xl mr-6 text-blue-400 font-mono font-extrabold ml-7">
          {" "}
          MEET OUR TEAM{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>
      <div className="flex justify-center mx-8 leading-4 mt-10">
        <p className="text-lg md:text-md sm:text-xl font-extralight">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas purus viverra. Lacus sed turpis tincidunt
          id. Id diam vel quam elementum pulvinar etiam. Proin nibh nisl
          condimentum id venenatis a.{" "}
        </p>
      </div>
      <div className=" w-4/5 mx-auto mt-4 about-team-custom grid grid-cols-3">
        {getTeammember()}
      </div>
    </div>
  );
}
