import React from "react";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";

//Images
import Mother from "../Assets/Images/mother.jpg";

const Monster = () => {
  const monster = useSelector((state) => state.fight.monster);
  const { pv, pvMax } = monster;
  const playersWin = useSelector((state) => state.fight.playersWin);
  const monsterWin = useSelector((state) => state.fight.monsterWin);

  return (
    <section>
      {playersWin ? (
        <h1 className="playersWin">Players Win</h1>
      ) : (
        <div className="container">
          <div className="row">
            <div className="card-monstre col-sm-12">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="row">
                    <div className="monster-div col-sm-2 offset-sm-3 d-flex">
                      <span
                        className="badge badge-danger ml-2 "
                        id="degatSpanMonster"
                      ></span>
                      <img className="monster" src={Mother} alt="monster" />
                    </div>

                    <div id="comboOnMonster" className="col-sm-6"></div>
                  </div>
                </div>
                <ProgressBar
                  pv={pv}
                  pvMax={pvMax}
                  bgType="bg-danger"
                  faType="fa-heart"
                  barName=" : pv"
                />
              </div>
            </div>
          </div>
          {monsterWin && <h1 className="monsterWin">Mother Win</h1>}
        </div>
      )}
    </section>
  );
};

export default Monster;
