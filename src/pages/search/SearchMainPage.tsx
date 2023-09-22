import { FC, useState } from 'react';
import { styled } from 'styled-components';
import { SearchBar } from '../../components/search/SearchBar';
import { SearchHistory } from 'components/search/SearchHistory';
import { GroupUI } from '../../components/common/GroupUI';
import { SearchFolderList } from 'components/search/SearchFolderList';

interface SectionTitleProps {
  index: number;
}

export const SearchMain: FC = () => {
  const [isInputClicked, setInputClicked] = useState(false);

  const handleInputClick = () => {
    setInputClicked(true);
  };

  const handleCancel = () => {
    setInputClicked(false);
  };

  const trendingGroups = [1, 2, 3];

  return (
    <>
      <h1 className="a11y-hidden">검색 메인 페이지</h1>
      <SearchBar onInputClick={handleInputClick} />
      {isInputClicked ? (
        <SearchHistory onCancel={handleCancel} />
      ) : (
        <Container>
          <TrendingFolder>
            <SectionTitle index={1}>
              <h2>인기 폴더</h2>
              <a href="#">더보기</a>
            </SectionTitle>
            <TrendingFolderList>
              <SearchFolderList />
            </TrendingFolderList>
          </TrendingFolder>
          <TrendingGroup>
            <SectionTitle index={2}>
              <h2>인기 그룹</h2>
              <a href="#">더보기</a>
            </SectionTitle>
            <TrendingGroupList>
              {trendingGroups.map((_, idx) => (
                <GroupUI key={idx} />
              ))}
            </TrendingGroupList>
          </TrendingGroup>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  padding-bottom: 10px;

  h2 {
    margin: 0;
  }

  section {
    padding-top: 18px;
  }
`;

const SectionTitle = styled.div<SectionTitleProps>`
  display: flex;
  padding-bottom: 6px;
  justify-content: space-between;
  width: 88%;
  margin: 0 auto;

  h2 {
    font-family: var(--font--semibold);
    font-size: 1rem;
  }

  a {
    align-self: flex-end;
    font-size: 0.8rem;
  }

  ${(props) =>
    (props.index === 2 || props.index === 3) &&
    `
    border-bottom: 2px solid #FFDDCC;
  `}
`;

const TrendingFolder = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const TrendingFolderList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin-bottom: 15px;
`;

const TrendingGroup = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const TrendingGroupList = styled.div`
  padding-top: 10px;
`;
