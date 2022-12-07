import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/network-data";
import Detail from "./Card/Detail";
import Thumbnail from "./Card/Thumbnail";

function CardItem({id, uid}) {
  const [dataUser, setDataUser] = useState('');

  React.useEffect(() => {
    async function getUserData(uid) {
      const { data } = await getUser(uid);
      setDataUser(data)
    }
    getUserData(uid)
  },[])

  const navigate = useNavigate();

  function onDetailHandler() {
    navigate(`/detail/${id}`);
  }
  return (
    <div className="card w-[350px] h-full rounded-2xl overflow-hidden shadow-lg mx-auto ">
        <Thumbnail id={id} detailHandler={onDetailHandler} />
        <Detail dataUser={dataUser} />

    </div>
  );
}

export default CardItem;
