import { Capsule, Text } from 'stelios';
import classes from './css/CertificateSetItem.module.css';

const CertificateSetItem = (props) => {
  return (
    <>
      <Capsule clickable color="primary" variant="neumorph" height='100px' image={props.coverImage} imageAlt={props.imageAlt} title={<Text variant="span" color="primary" size="medium">{props.title}</Text>} className={classes.certificateSetItemWrapper}/>
    </>
  );
};

export default CertificateSetItem;