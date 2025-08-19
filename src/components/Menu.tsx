import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";
import { basePath, menuItems } from "../generic/constants";

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = Object.values(menuItems).map((item) => {
  return {
    title: item,
    url: basePath + item,
  };
});

const Menu: React.FC = () => {
  const location = useLocation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <IonMenu
      contentId="main"
      type="overlay"
      style={isDesktopOrLaptop ? { width: "20%" } : {}}
    >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>BASE</IonListHeader>
          <IonNote>user@barclays.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
