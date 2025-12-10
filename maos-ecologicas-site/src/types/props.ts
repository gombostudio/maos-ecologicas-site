import { IconDefinition } from '@fortawesome/fontawesome-common-types'; 
export interface propsTypes {
  Title: string;
  textBody: string;
  Icon: IconDefinition;
  onClick?: () => void; 
}
