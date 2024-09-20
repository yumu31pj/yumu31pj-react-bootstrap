import parse from "html-react-parser";
import { Picture } from "../../../components/ui/image";
import { PictureProps } from "../../../types/ui-props";
import styles from "./conversations.module.scss";

type SpeakerType = {
  speakerId: number;
  name: string;
  iconItem: PictureProps;
}

type ConversationType = {
  speaker: {
    person: SpeakerType;
    comment: string;
  }
}

type ConversationsType = {
  conversations: ConversationType[];
}

const Conversations = (props: ConversationsType) => {
  const {conversations} = props;
  const baseClass = 'conversation';
  const modifierClassOdd = 'conversation--odd';
  const modifierClassEven = 'conversation--even'
  return (
    <ul className={styles['conversations']}>
      {conversations.map((conversation: ConversationType, key: number) => (
        <li key={key} className={`${styles[baseClass]} ${conversation.speaker.person.speakerId % 2 == 1 ? styles[modifierClassOdd] : styles[modifierClassEven]}`}>
          <Picture 
            srcSP={conversation.speaker.person.iconItem.srcSP}
            srcWebpSP={conversation.speaker.person.iconItem.srcWebpSP}
            srcPC={conversation.speaker.person.iconItem.srcPC}
            srcWebpPC={conversation.speaker.person.iconItem.srcWebpPC}
            altText={conversation.speaker.comment}
            width={conversation.speaker.person.iconItem.width}
            height={conversation.speaker.person.iconItem.height}
            breakpoint={951}

          />
          <p>{parse(conversation.speaker.comment)}</p>
        </li>
      ))}
    </ul>
  )
}

export default Conversations;