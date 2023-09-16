import { styled } from 'styled-components';
import tagIcon from '../../assets/icon/icon-tag.svg';

export interface TagItemProps {
  tagTitle?: string;
  tagNumber?: number;
}

export const TagItem: React.FC<TagItemProps> = ({
  tagTitle,
  tagNumber = 0,
}) => {
  return (
    <Container>
      <div className="icon-tag">
        <img src={tagIcon} alt="" />
      </div>
      <div className="tag-info">
        <span className="tag-title">당근 케이크{tagTitle}</span>
        <span className="tag-number">
          게시물 3000+개{`게시물 ${tagNumber}+개`}
        </span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 0 auto;
  padding: 10px 0;
  width: 88%;

  div.icon-tag {
    border-radius: 50%;
    border: 1px solid var(--gray200-color);
    width: 40px;
    height: 40px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.tag-info {
    padding: 10px 15px;
  }

  div.tag-info span {
    display: block;
  }

  span.tag-title {
    font-family: var(--font--Medium);
    font-size: 14px;
  }

  span.tag-number {
    font-size: 10px;
    color: #898989;
  }
`;