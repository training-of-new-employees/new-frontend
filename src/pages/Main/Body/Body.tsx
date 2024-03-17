import Advantages from '../Advantages/Advantages';
import Contacts from '../Contacts/Contacts';
import MobileContacts from '../Contacts/MobileContacts';
import Promo from '../Promo/Promo';
import MobileSteps from '../Steps/MobileSteps';
import Steps from '../Steps/Steps';

export default function Body() {
  return (
    <main>
      <Promo />
      <Advantages />
      <Steps />
      <MobileSteps />
      <Contacts />
      <MobileContacts />
    </main>
  );
}
