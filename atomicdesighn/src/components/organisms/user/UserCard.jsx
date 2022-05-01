import React from "react";
import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      {/* unsplash
    元画像URL
    https://unsplash.com/photos/yihlaRCCvd4 */}
      <img height={160} width160 src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
