import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "テストさん",
  image: "https://source.unsplash.com/yihlaRCCvd4",
  email: "aaaa@test.com",
  phone: "080-1234-5678",
  company: {
    name: "とりあえず会社",
  },
  website: "https://test.com",
};

function App() {
  return (
    <div>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
