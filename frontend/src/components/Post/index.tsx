import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { PostProps } from "./interface";
import { postMetadataPayload } from "src/services/interface";

import {
  PostContainer,
  PostImageContainer,
  PostImage,
  PostBody,
  PostViewMoreButton,
} from "./styled";

import { PostCategory, PostTitle, PostMeta, Modal } from "src/components";

import { incrementMetadataView } from "src/services";

import { formatDate } from "src/utils";

export const Post: FC<PostProps> = ({
  highlight = false,
  post
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const trimText = (text: string): string => {
    const maxLength = 185;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const openPost = async (): Promise<void> => {
    setIsOpen(!isOpen);

    if (post) {
      const { uuid } = post;

      const payload: postMetadataPayload = {
        newsUuid: uuid,
      };

      await incrementMetadataView(payload);
    }
  };

  return (
    <>
      {post && (
        <>
          <PostContainer $highlight={highlight}>
            <PostImageContainer $highlight={highlight}>
              <Link to="#" onClick={openPost}>
                <PostImage
                  alt={post.title}
                  src={post.image}
                  decoding="async"
                  data-nimg="intrinsic"
                />
              </Link>
            </PostImageContainer>
            <PostBody>
              <PostCategory
                highlight={highlight}
                label={post.newsCategory.label}
                url={post.newsCategory.url}
                backgroundColor={post.newsCategory.color}
              />
              <PostTitle
                highlight={highlight}
                label={post.title}
                onClick={openPost}
              />
              <PostMeta
                highlight={highlight}
                author={post.newsAuthor}
                date={formatDate(post.createdAt)}
                views={post.newsMetadata?.views}
                shares={post.newsMetadata?.shares}
              />
            </PostBody>
          </PostContainer>
          <Modal
            title={post.title}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            footerContent={
              <PostViewMoreButton as={Link} to={`/${post.slug}`}>Ver notícia completa</PostViewMoreButton>
            }
          >
            <PostCategory
              label={post.newsCategory.label}
              url={post.newsCategory.url}
              backgroundColor={post.newsCategory.color}
            />
            <PostImage
              alt={post.title}
              src={post.image}
              decoding="async"
              data-nimg="intrinsic"
            />
            <p>{trimText(post.description)}</p>
          </Modal>
        </>
      )}
    </>
  );
};
