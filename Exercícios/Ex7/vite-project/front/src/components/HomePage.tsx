import { ProfileCard } from "./ProfileCard";
import { UpdateCard } from "./UpdateCard";

export const HomePage = () => {
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h1>Home: sua página logada</h1>
      <ProfileCard />
      <UpdateCard />
    </div>
  );
};
