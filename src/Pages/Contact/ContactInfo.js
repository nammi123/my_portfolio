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
    subtitle: ["akshatha1410@", "+91 9036482474", "Akshatha B"],
    link: [
      "mailto:akshatha1410@gmail.com",
      "https://api.whatsapp.com/send?phone=9036482474",
      "https://www.linkedin.com/in/akshatha-b-31b730217/",
    ],
  },
];

export default ContactInfo;
