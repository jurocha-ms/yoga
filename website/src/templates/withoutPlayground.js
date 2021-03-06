/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import React from 'react';
import Page from '../components/Page';
import Padded from '../components/Padded';
import {Row, Col} from 'antd';
import Link from 'gatsby-link';
import './index.css';

export default ({pathContext}) => {
  return (
    <Page className="doc-block no-playground">
      <Padded>
        <Row>
          <Col xl={16} lg={16} md={24} sm={24} xs={24}>
            <div className="markdown" dangerouslySetInnerHTML={{__html: pathContext.html}} />
          </Col>
        </Row>
        <Link to="/docs" className="overview">
          BACK TO OVERVIEW
        </Link>
      </Padded>
    </Page>
  );
};
