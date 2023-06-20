# 배포 링크: [NEMOFLIX](https://nemoflix-nu.vercel.app/)

# 폴더 구조

```jsx
📦src
 ┣ 📂api
 ┃ ┣ 📜apiClient.ts
 ┃ ┗ 📜apiUrl.ts
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂Image
 ┃ ┃ ┣ 📂Paragraph
 ┃ ┃ ┣ 📂Typography
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂LoaderIcon
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂Sidebar
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂login
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📂Authorization
 ┃ ┃ ┣ 📂CategoryLayout
 ┃ ┃ ┣ 📂TopSectionLayout
 ┣ 📂constants
 ┃ ┣ 📜mainPosterUrlList.ts
 ┃ ┗ 📜windowScreenSizeData.ts
 ┣ 📂fonts
 ┃ ┣ 📜font.d.ts
 ┃ ┗ 📜NetflixFont.ttf
 ┣ 📂hooks
 ┃ ┣ 📜useGetCategoryData.ts
 ┃ ┣ 📜useGetDetailData.ts
 ┃ ┣ 📜useMoveToNextSlide.ts
 ┃ ┣ 📜useRouter.ts
 ┃ ┗ 📜useScrollYPosition.ts
 ┣ 📂routes
 ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜reset.css
 ┣ 📂types
 ┃ ┣ 📜apiDataTypes.ts
 ┃ ┗ 📜categoryLabelList.ts
 ┣ 📂utils
 ┃ ┣ 📜makeBgPath.ts
 ┃ ┣ 📜makeImagePath.ts
 ┃ ┣ 📜makeRandomMainPoster.ts
 ┃ ┗ 📜moveToSection.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

# 사이드바 메뉴 클릭 → smooth-scroll적용

- home route는 height가 400vh, 4개의 섹션이 100vh씩 나눠가지고 있다.
- 그래서 처음에 개발자 도구로 height값이 얼마인지 확인하였다.
  ![image](https://github.com/brother1-4752/marvel-characters-client/assets/60454376/9b6c75ba-e411-4278-b4a1-3b04d40ec2b0)
  `jsx
window.scrollTo({
    top: 969*0(|| 969*1 || 969*2 || 969*3), //각각 1~4영역
    behavior: "smooth",
});
`
- 그런데, 개인마다 가지고 있는 디바이스의 사이즈가 상이하기 때문에 다른 방법을 찾아야 했다.

### 적용 후

- windowScreenSizeData.ts
  ```jsx
  export const VIEW_HEIGHT = window.innerHeight;
  ```
- moveToSection.ts

  ```jsx
  import { VIEW_HEIGHT } from "@/constants/windowScreenSizeData";

  //TODO: utils디렉토리에 두는게 맞을까?
  export const moveToSection = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: 원래는 undefined일 경우 에러, 어떻게 처리하지?
    const INDEX = event.currentTarget.dataset.index
      ? +event.currentTarget.dataset.index
      : -1;

    window.scrollTo({
      top: VIEW_HEIGHT * INDEX,
      behavior: "smooth",
    });
  };
  ```

<video src="https://github.com/brother1-4752/nemoflix/assets/60454376/a8608c16-4270-4cd1-9ee0-fae64e5430e3"></video>

# Loading Spinner

[Pure CSS Loader - Optimized Spinners for Web · Loading.io](https://loading.io/css/)

![로딩 표시](https://github.com/brother1-4752/nemoflix/assets/60454376/6f207130-ab92-4791-b65d-1b1561736c86)

# Pagination

- initial/final index 범위 벗어날 경우, disabled 적용

### useMoveToNextSlide.ts

```jsx
import { useState } from "react";

export const useMoveToNextSlide = () => {
  const [cardDataIndex, setCardDataIndex] = useState(0);

  const moveToNextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: undefined 가능성 있는 것들을 어떻게 처리해야할지 모르겠다
    const INDEX = event.currentTarget.dataset.cardpageindex
      ? +event.currentTarget.dataset.cardpageindex
      : -1;
    setCardDataIndex((prev) => {
      const calculatedIndex = prev + INDEX;
      //TODO: 매직넘버 처리하기(0:INITIAL_INDEX, 18|19: FINAL_INDEX)
      if (0 >= calculatedIndex) return 0;
      else if (calculatedIndex >= 19) return 18;
      return prev + INDEX * 3;
    });
  };

  return { cardDataIndex, moveToNextSlide };
};
```

### CategoryLayout.tsx

```jsx

const CategoryLayout = ({ variant = "popular", ...rest }: Props) => {
	...
  const { cardDataIndex, moveToNextSlide } = useMoveToNextSlide();
	return (
			...
				<Button
            disabled={cardDataIndex === 0 ? true : false}
            variant="NEXT_CATEGORY"
            data-cardpageindex={-1}
            onClick={moveToNextSlide}
            style={{ position: "absolute", top: "15em", left: "4.5em" }}
        >◀</Button>
        <Button
            disabled={cardDataIndex === 18 ? true : false}
            variant="NEXT_CATEGORY"
            data-cardpageindex={1}
            onClick={moveToNextSlide}
            style={{ position: "absolute", top: "15em", right: "6em" }}
        >▶</Button>
	)}
```

<aside>

# 보완점

1. INITIAL_INDEX, FINAL_INDEX 매직 넘버 처리
2. undefined으로 리턴될 수 있는 값들을 어떻게 처리할지 고민하기

</aside>

![페이지네이션 (2)](https://github.com/brother1-4752/nemoflix/assets/60454376/1ffec50e-f7ac-4e74-89e8-0ca2adbd875c)

# 디테일 화면 구현 및 닫기 기능

<video src="https://github.com/brother1-4752/nemoflix/assets/60454376/11f3c213-656b-402b-b7c6-09f2d23497fb"></video>

# 랜덤 메인포스터 생성

<video src="https://github.com/brother1-4752/nemoflix/assets/60454376/15599014-69e1-4983-8a70-45b4b8bb6a5a"></video>
