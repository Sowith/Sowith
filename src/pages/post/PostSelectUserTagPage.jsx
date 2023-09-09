import { useState, useEffect } from "react";
import { styled } from "styled-components"

import { useModalControl } from "../../hooks/useModalControl";
import { SearchBar } from "../../components/common/post/SearchBar";
import { Button } from "../../components/common/Button";
import { UserItem } from "../../components/common/post/UserItem";

import IconUserTag from "../../assets/icon/icon-user-tag.svg";
import profile_1 from "../../assets/testImg/profile_1.jpg"
import profile_2 from "../../assets/testImg/profile_2.jpg"
import profile_3 from "../../assets/testImg/profile_3.jpg"
import profile_4 from "../../assets/testImg/profile_4.jpg"
import profile_5 from "../../assets/testImg/profile_5.jpg"


export const PostSelectUserTagPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectId, setSelectId] = useState([]);
  const { openModal, closeModal, ModalComponent } = useModalControl();

  const handleTag = (userId) => {
    setSelectId([...selectId, userId]);
  };

  useEffect(() => {
    openModal();
  }, [])

  return (
    <>
      <ModalComponent>
        <SearchBar
          id={'UserTagSearch'}
          icon={IconUserTag}
          tagname={'humantag'}
          placeholder={'유저 검색...'}
          selectTag={selectId}
          setSelectTag={setSelectId}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />

        <Container>
          <UserItem handleFunc={handleTag} profile={profile_1} userId={'starseeker_h00n'} userName={'강동훈'} isFollow={true} />
          <UserItem handleFunc={handleTag} profile={profile_2} userId={'__hoon__99'} userName={'이정훈'} />
          <UserItem handleFunc={handleTag} profile={profile_3} userId={'hoonie_hoon_'} userName={'한승훈'} />
          <UserItem handleFunc={handleTag} profile={profile_4} userId={'kang_hoon'} userName={'이강훈'} />
          <UserItem handleFunc={handleTag} profile={profile_5} userId={'hoon_1297319'} userName={'미스터훈'} />
        </Container>

        <Button
          type="button"
          text={"완료"}
          width={'90%'}
          height={'41px'}
          fontSize={'12px'}
          margin={'auto 0 12px'}
          fontFamily={'var(--font--Bold)'}
          onClick={closeModal}
        />
      </ModalComponent>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  height: calc(100% - 170px);
  padding: 16px 13px 0;
  margin-right: -5px;
  overflow-y: scroll;

  &::-webkit-scrollbar-corner{
    display: none;
  }
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: var(--main-color);;
  }
`;