import { useState } from "react";
import DashNav from "./dash-nav";
import DashStats from "./dash-stats";
import Modal from "./modal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <DashNav onOpen={() => setOpenModal(true)} />

      <DashStats />

      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default Dashboard;
