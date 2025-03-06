import React from 'react'

import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";

const InterviewPage = async() => {
  const assessments = await getAssessments();
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-500 text-transparent bg-clip-text">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
