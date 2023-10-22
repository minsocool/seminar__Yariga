import { ISidebarLink } from "@/components/types";
import {
  IconAgent,
  IconDashboard,
  IconMessage,
  IconProfile,
  IconProperty,
  IconReview,
} from "@/components/Icons";

export const sidebarLink: ISidebarLink[] = [
  {
    icon: <IconDashboard />,
    title: "Dashboard",
    link: "/",
  },
  {
    icon: <IconProperty />,
    title: "Property",
    link: "/property",
  },
  {
    icon: <IconAgent />,
    title: "Agent",
    link: "/agent",
  },
  {
    icon: <IconReview />,
    title: "Review",
    link: "/review",
  },
  {
    icon: <IconMessage />,
    title: "Message",
    link: "/message",
  },
  {
    icon: <IconProfile />,
    title: "Survey",
    children: [
      {
        title: "Survey-management",
        link: "/survey/survey-management",
      },
      {
        title: "Survey-list",
        link: "/survey/survey-list",
      },
    ],
  },
  {
    icon: <IconProfile />,
    title: "Car",
    children: [
      {
        title: "Car-model",
        link: "/car/model",
      },
      {
        title: "Car-version",
        link: "/car/version",
      },
    ],
  },
  {
    icon: <IconProfile />,
    title: "My Profile",
    link: "/profile",
  },
];
