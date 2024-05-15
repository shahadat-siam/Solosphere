import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const ReactTabs = () => {
  const [ jobs, setJobs ] = useState([]);
  console.log(jobs);
  useEffect(() => {
    const getData = async () => {
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  }, []);
  return (
    <div className="flex justify-center items-center">
      <Tabs>
        <div className="flex justify-center items-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <div className="py-11 px-7 ">
          <TabPanel>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {jobs.filter((j) => j.category === "Web Development").map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {jobs.filter((j) => j.category === "Graphics Design").map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {jobs.filter((j) => j.category === "Digital Marketing").map((job) => (
                  <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
