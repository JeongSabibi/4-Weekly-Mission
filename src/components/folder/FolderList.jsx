import FolderTabItem from './FolderTabItem';
import Tab from './Tab';
import Card from '../Card';

import add from '../../images/add.svg';
import share from '../../images/share.svg';
import pen from '../../images/pen.svg';
import deleteicon from '../../images/delete.svg';

import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';

import { getAllFolderLink, getFolderLinkData } from '../../api';
import { React, useEffect, useState } from 'react';

import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 2.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 106rem;
  margin: 0 auto;

  @media (max-width: 1123px) {
    column-gap: 2.4rem;
    padding: 0 3.2rem;
    width: 76.8rem;
  }

  @media (max-width: 767px) {
    row-gap: 2rem;
    width: 38.9rem;
  }
`;

const MainContainerEmpty = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  padding: 4rem;
`;

const Folder = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: 'folders folders add-button';
  justify-content: space-between;
`;

const FolderContainer = styled.div`
  width: 100%;
`;

const OptionContainer = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const FolderName = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const FolderAddButton = styled.a`
  color: #6d6afe;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  grid-area: add-button;
`;

const FolderTab = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  grid-area: folders;
  column-gap: 0.8rem;
`;

const OptionIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Button = styled.button`
  color: var(--gray60);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const FolderList = ({ folderList }) => {
  const [links, setLinks] = useState(null);
  const [folderFilter, setFolderFilter] = useState({ id: 'all', name: '전체' });
  const { openModal, modalFunc, handleModalOpen, handleModalClose } = useModal();

  const handleLoadAllFolderLink = async () => {
    const { data, error } = await getAllFolderLink();
    if (error) {
      return alert(error);
    }
    setLinks(data);
    setFolderFilter({ id: 'all', name: '전체' });
  };

  const handleLoadFolderLink = async () => {
    const { data, error } = await getFolderLinkData(
      folderFilter.id === 'all' ? '' : `${folderFilter.id}`,
    );

    if (error) {
      return alert(error);
    }
    setLinks(data);
  };

  const handleAddButtonClick = () => {
    handleModalOpen({
      title: '폴더 추가',
      placeholder: '내용 입력',
      buttonColor: 'blue',
      buttonTitle: '추가하기',
    });
  };

  const handleShareButtonClick = () => {
    handleModalOpen({
      title: '폴더 공유',
      subTitle: folderFilter.name,
    });
  };

  const handleUpdateButtonClick = () => {
    handleModalOpen({
      title: '폴더 이름 변경',
      placeholder: folderFilter.name,
      buttonColor: 'blue',
      buttonTitle: '변경하기',
    });
  };

  const handleDeleteButtonClick = () => {
    handleModalOpen({
      title: '폴더 삭제',
      subTitle: folderFilter.name,
      buttonColor: 'red',
      buttonTitle: '삭제하기',
    });
  };

  useEffect(() => {
    handleLoadFolderLink();
  }, [folderFilter]);

  if (!links) {
    return <MainContainerEmpty>저장된 링크가 없습니다.</MainContainerEmpty>;
  }

  return (
    <>
      {openModal && modalFunc && (
        <Modal
          title={modalFunc.title}
          subTitle={modalFunc.subTitle}
          placeholder={modalFunc.placeholder}
          buttonColor={modalFunc.buttonColor}
          buttonTitle={modalFunc.buttonTitle}
          onClick={handleModalClose}
        />
      )}
      <MainContainer>
        <FolderContainer>
          {folderList && (
            <Folder>
              <FolderTab>
                <Tab onClick={handleLoadAllFolderLink}>전체</Tab>
                {folderList.map((item) => (
                  <FolderTabItem folder={item} key={item.id} setFolderFilter={setFolderFilter} />
                ))}
              </FolderTab>
              <FolderAddButton onClick={handleAddButtonClick}>
                폴더 추가
                <img width="16" height="16" src={add} alt="folder add button" />
              </FolderAddButton>
            </Folder>
          )}
          <OptionContainer>
            <FolderName>{folderFilter.name}</FolderName>
            <Options>
              <Button onClick={handleShareButtonClick}>
                <OptionIcon src={share} alt="공유 아이콘" />
                공유
              </Button>
              <Button onClick={handleUpdateButtonClick}>
                <OptionIcon src={pen} alt="이름 변경 아이콘" />
                이름 변경
              </Button>
              <Button onClick={handleDeleteButtonClick}>
                <OptionIcon src={deleteicon} alt="삭제 아이콘" />
                삭제
              </Button>
            </Options>
          </OptionContainer>
        </FolderContainer>
        {links.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </MainContainer>
    </>
  );
};

export default FolderList;
