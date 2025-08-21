import React, { useState, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import BTable from "./BTable";
import BPieChart from "./BPieChart";
import BBarChart from "./BBarChart";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

const BTabBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"live" | "offline">("live");
  const swiperRef = useRef<SwiperType | null>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleTabChange = (value: "live" | "offline") => {
    setSelectedTab(value);
    if (swiperRef.current) {
      swiperRef.current.slideTo(value === "live" ? 0 : 1);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const index = swiper.activeIndex;
    setSelectedTab(index === 0 ? "live" : "offline");
  };

  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        width: "100%",
      }}
    >
      <IonHeader>
        <IonToolbar>
          <IonSegment
            value={selectedTab}
            onIonChange={(e) =>
              handleTabChange(e.detail.value as "live" | "offline")
            }
          >
            <IonSegmentButton value="live">
              <IonLabel>Graphical View</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="offline">
              <IonLabel>Table View</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div
            style={{
              flexDirection: isTabletOrMobile ? "column" : "row",
              display: "flex",
            }}
          >
            <BPieChart />
            <BBarChart />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <BTable />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BTabBar;
