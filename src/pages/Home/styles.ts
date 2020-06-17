import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 50%;
  max-width: 420px;
  min-width: 280px;
  height: 42px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 18px;
  padding: 6px 10px 6px 16px;
  margin-bottom: 20px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ItemContainer = styled.button`
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  background-color: #e8e8e8;
  border-radius: 11px;
  margin-bottom: 21px;
  padding: 12px;
  
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  h2 {
    text-align: left;
  }
  p {
    margin-top: 6px;
  }
`

export const ItemImg = styled.img`
  height: 100%;
  width: auto;
  max-width: 120px;
  max-width: 33%;
  object-fit: cover;
`

export const List = styled.div`
  min-height: 30px;
  max-width: 600px;
  min-width: 280px;
`

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;
  max-width: 420px;
  width: 88%;
`

export const Tag = styled.button`
  background-color: #00BBB0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  margin: 5px;
`;