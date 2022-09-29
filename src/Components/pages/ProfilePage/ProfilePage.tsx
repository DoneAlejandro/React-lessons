import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileName, toggleProfile } from "src/store/profile/actions";
import { ProfileState } from "src/store/profile/reducer";
import style from "./ProfilePage.module.css";

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);

  const [value, setValue] = useState("");

  return (
    <>
      <div className={style.profileWrapper}>
        <h3>Profile page</h3>
        <div>
          <div>
            <div className={style.checkedVisible}>
              <input type="checkbox" checked={visible} readOnly />
              <p>:visible</p>
            </div>
            <button onClick={() => dispatch(toggleProfile())}>
              toggle visible
            </button>
          </div>
          <div>
            <p>name: {name}</p>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch(changeProfileName(value))}>
              Change name
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
