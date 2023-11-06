import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const ContactInfo = [
  {
    icon: [
      <Email color="#F84437" size={"2rem"} />,
      <Whatsapp color="#4DCB5B" size={"2rem"} />,
      <Linkedin color="#0077B7" size={"2rem"} />,
    ],
    title: ["Gmail", "WhatsApp", "Linkedin"],
    subtitle: ["naminderdahiya@", "+91 7909354544", "Naminder Kumar"],
    link: [
      "mailto:naminderdahiya2933@gmail.com",
      "https://api.whatsapp.com/send?phone=7909354544",
      "https://www.linkedin.com/in/naminder-kumar-5668bb191/",
    ],
  },
];

export default ContactInfo;
