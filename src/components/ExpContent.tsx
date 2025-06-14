import React from "react";

interface ExperienceContent {
  title: string;
  date: string;
  responsibilities: string[];
}

interface ExpContentProps {
  expContent: ExperienceContent;
}

const ExpContent: React.FC<ExpContentProps> = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.date}</p>
      <p className="text-white-50 mt-4">Responsibilities</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
