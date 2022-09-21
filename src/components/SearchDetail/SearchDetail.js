import React, { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import classNames from "classnames/bind";

import SearchResult from "../SearchResult/SearchResult";
import Wrapper from "../popper/Wrapper";
import style from "./SearchDetail.module.scss";
import { request } from "~/Utils/request";
import Videos from "../Video/Videos";

const cx = classNames.bind(style);

const SearchDetail = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef();

  const handleHidleResult = () => {
    setShowResult(false);
  };

  const onfocus = () => {
    searchValue.length ? setShowResult(true) : setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClickSearch = (e) => {
    
    
  };

  useEffect(() => {
    request(`search?part=snippet&q=${encodeURIComponent(searchValue)}`).then(
      (data) => setSearchResult(data.items)
    );
    onfocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  // console.log(searchResult);
  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult}
        placement="bottom"
        hideOnClick={showResult}
        render={(attrs) => (
          <div className={cx("searchDetail")} tabIndex="-1" {...attrs}>
            <Wrapper>
              {searchResult.map((result, index) => (
                <SearchResult key={index} data={result} onClick={handleClear} />
              ))}
            </Wrapper>
          </div>
        )}
        onClickOutside={handleHidleResult}
      >
        <div className={cx("input")}>
          <Input
            ref={inputRef}
            className={cx("inputSearch")}
            type="text"
            placeholder="Tìm kiếm"
            spellCheck="true"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => onfocus()}
          ></Input>

          {searchValue && (
            <button onClick={handleClear}>
              <CloseOutlined className={cx("clearSearch")} />
            </button>
          )}

          <Tooltip color={"#717171"} title="Tìm kiếm" placement="bottom">
            <Button
              onClick={handleClickSearch}
              className={cx("buttonSearch")}
              icon={<SearchOutlined />}
            ></Button>
          </Tooltip>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default SearchDetail;
