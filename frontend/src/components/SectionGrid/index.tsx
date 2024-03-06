import React, { FC, useState, useEffect } from "react";

import { SectionGridProps } from "./interface";
import { PostItem } from "src/components/Post/interface";

import { SectionGridContainer } from "./styled";

import { Wrapper, Column, Post } from "src/components";

export const SectionGrid: FC<SectionGridProps> = ({ type, posts }) => {
  const [postHighlight, setPostHighlight] = useState<PostItem>();
  const [otherPosts, setOtherPosts] = useState<PostItem[]>();

  const checkPosts = (): boolean => posts && posts.length > 0;

  useEffect(() => {
    if (checkPosts()) {
      const highlight = posts.find((post) => post.highlight);

      if (highlight) {
        setPostHighlight(highlight);

        const currentPosts = posts.filter(
          (post) => post.uuid !== highlight.uuid
        );
        setOtherPosts(currentPosts);
      }
    }
  }, [posts]);

  return (
    <>
      {checkPosts() && (
        <SectionGridContainer>
          <Wrapper>
            {type === "highlight" ? (
              <>
                <Column>
                  <Post highlight={true} post={postHighlight} />
                </Column>
                <Column>
                  {otherPosts &&
                    otherPosts.map((post, index) => (
                      <Post post={post} key={index} />
                    ))}
                </Column>
              </>
            ) : (
              <>
                {posts.map((post, index) => (
                  <Column key={`Column_${index}`}>
                    <Post post={post} />
                  </Column>
                ))}
              </>
            )}
          </Wrapper>
        </SectionGridContainer>
      )}
    </>
  );
};
