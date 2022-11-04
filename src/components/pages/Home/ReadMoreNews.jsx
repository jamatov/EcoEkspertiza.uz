import React from "react";
import img from "../../../assets/images/icons/commiteinfoimg1.png";
import Consectetur from "./Consectetur";
import read1 from "../../../assets/images/icons/read-more1.jpg";
import read2 from "../../../assets/images/icons/read-more2.jpg";
import read3 from "../../../assets/images/icons/read-more3.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../../../constants/tools";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ReadMoreNews() {
  const [id, setId] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const T = useTranslation();

  const getById = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/news/news-detail/${path}/`)
      .then((res) => {
        setId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getById();
  }, [path, T.i18n.language]);

  return (
    <section className="ReadMoreNews">
      <div className="containerr">
        <img className="raedmorenews-img1" src={id.image} alt={id.title} />
        <div className="readmorenews-info1">
          <h2>{id.title}</h2>
          {/* <p>Neque, proin enim, posuere lectus eleifend gravida vitae. Purus odio sit arcu et, quis risus dui quis massa. Feugiat mollis arcu arcu viverra amet in. </p> */}
        </div>

        <div className="raedmorenews-info2">
          {/* <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> */}
          <p>{id.content}</p>
          {/* <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p>
          <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p>
          <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p>
          <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p> */}
          <div className="raedmorenews-info2__images row">
            {id.new_detail &&
              id.new_detail.map((item2, index2) => (
                <div className=" mb-4">
                  <img key={index2} src={item2.image} alt={item2.content} />
                  <h3>{item2.content}</h3>
                </div>
              ))}

            {/* <img src={read2} alt="" />
            <img src={read3} alt="" /> */}
          </div>
          {/* <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> */}
          {/* <p>{id.subtitle}</p> */}
          {/* <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p>
          <p>Tristique id neque cras auctor nisl faucibus erat sem. Tortor fames nibh gravida faucibus at vulputate. Nullam lorem scelerisque vitae amet morbi arcu. Orci dignissim id interdum et, pellentesque enim consectetur nisi</p> */}
        </div>

        <Consectetur />
      </div>
    </section>
  );
}
