import {  AiOutlineTeam } from "react-icons/ai";
import {
  BsBagFill,
  BsBarChartFill,
  BsBuildingFill,
  BsCash,
} from "react-icons/bs";
import { GiLockSpy } from "react-icons/gi";

export const features = [
  {
    heading: "Agency Ad Accounts",
    description:
      "Run your campaigns seamlessly with our verified Agency Ad Accounts. Say goodbye to unexpected blackouts and keep your revenue growing effortlessly.",
    icon: <BsBuildingFill className="relative z-50 h-4 w-4 text-primary" />,
  },
  {
    heading: "Instant Top-ups",
    description:
      "No delays, no downtime! We provide instant top-ups to keep your campaigns running smoothly, no matter when the transfer reaches us.",
    icon: <BsBarChartFill className="relative z-50 h-4 w-4 text-primary" />,
  },
  {
    heading: "No Cap on Ad Spends",
    description:
      "Scale your business to new heights with unlimited ad spending on our accounts—no restrictions, just growth!",
    icon: <AiOutlineTeam className="relative z-50 h-4 w-4 text-primary" />,
  },
  {
    heading: "Hassle-free Payments",
    description:
      "Forget payment headaches! We offer flexible payment options tailored to suit your needs, making transactions smooth and stress-free.",
    icon: <BsCash className="relative z-50 h-4 w-4 text-primary" />,
  },
  {
    heading: "Dedicated Account Managers",
    description:
      "Unlock your full potential with the help of our expert account managers. They’re here to guide and support you on any advertising platform.",
    icon: <GiLockSpy className="relative z-50 h-4 w-4 text-primary" />,
  },
  {
    heading: "Exclusive E-commerce Solutions",
    description:
      "Get access to our premium e-commerce advertising strategies. Our agency ad account holders benefit from solutions designed to drive results!",
    icon: <BsBagFill className="relative z-50 h-4 w-4 text-primary" />,
  },
];
