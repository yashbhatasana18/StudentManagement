import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../MainScreen";
import { listInstitutes } from "../../actions/institutesActions";

const Dashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listInstitutes());
    if (!userInfo) {
      console.log("log out");
      navigate("/");
    }
  }, [dispatch, navigate, userInfo]);

  const instituteList = useSelector((state) => state.instituteList);
  const { instituteInfo } = instituteList;

  return (
    <MainScreen title="Dashboard">
      {/* Welcome {`${userInfo.name}`} */}
      <div class="row">
        <div class="col-lg-3 col-6">
          <div class="small-box bg-info">
            <div class="inner">
              <h3>Test</h3>

              <p>Institutes</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <Link to="/institutes" class="small-box-footer">
              More info <i class="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>
        {/* <div class="col-lg-3 col-6">
          <div class="small-box bg-success">
            <div class="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">
              More info <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div> */}
      </div>
    </MainScreen>
  );
};

export default Dashboard;
