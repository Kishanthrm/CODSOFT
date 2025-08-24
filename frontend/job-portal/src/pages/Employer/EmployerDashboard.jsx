import { useEffect, useState } from "react";
import {
    Plus,
    Briefcase,
    Building2,
    TrendingUp,
    CheckCircle2,
} from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const EmployerDashboard = () => {

  const navigate = useNavigate();

const [dashboardData, setDashboardData] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const getDashboardOverView = async () => {
  try {
    setIsLoading(true);
    const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVERVIEW);
    if (response.status === 200) {
      setDashboardData(response.data);
    }
  } catch (error) {
    console.log("error");
  } finally {
    setIsLoading(false);
  }
};
 useEffect(()=> {
  getDashboardOverView();
  return () =>{};
 }, []);

    return (
        <div>EmployerDashboard</div>
    )
}

export default EmployerDashboard






