import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TagList from './tag_list';
import '../styles/components/footer.scss';

const Footer = ({ categories, topics }) => {
  return (
    <div className="app-container footer">
      <div className="footer__column footer__column-2x">
        <h2 className="footer__heading">
          分類
        </h2>
        <TagList tags={categories} />
      </div>
      <div className="footer__column">
        <h2 className="footer__heading">
          熱門討論
        </h2>
        <div className="align-row footer__hot-topic">
          <ul className="unordered-list-circle">
            {
              _.map(topics, (item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.link} title={item.title}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
      <div className="footer__column">
        <h2 className="footer__heading">
          關於「吃什麼，どっち」
        </h2>
        <ul className="unordered-list-circle">
          <li>
            <a
              title="什麼是「吃什麼，どっち」？"
              href="https://cythilya.github.io/2015/02/02/dotchi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              什麼是「吃什麼，どっち」？
            </a>
          </li>
          <li>
            <a
              title="聯絡我們"
              href="mailto:cythilya@gmail.com"
            >
              聯絡我們
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Footer.propTypes = {
  categories: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
};

export default Footer;
