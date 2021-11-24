import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
// import {UserProfile} from "./types/userProfile"
import axios from "axios";
import { useState } from "react";

// const user = {
//   id:1,
//   name: "じゃけぇ",
//   email: "123@aaa.com",
//   address: "ADDRESS",
// }

export default function App() {
  //importファイルのgetUsers,userProfiles,loading,errorを取得する。
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const onClickFetchUser = () => {
  //   setLoading(true); //ローディングしている状態。
  //   setError(false); //初期化はエラーがない状態
  //   //データ取得中はLoadingと表示して、エラーがエラーが合った時に情報を取得するようにできる。
  //   axios
  //     .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       const data = res.data.map((user) => ({
  //         id: user.id,
  //         name: `${user.name}(${user.username})`,
  //         email: user.email,
  //         address: `${user.address.city}${user.address.suite}${user.address.street}`
  //       }));
  //       setUserProfiles(data);
  //     })
  //     .catch(() => {
  //       setError(true);
  //       //errorを表示させる。
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //       //Loadingに関して初期値に戻す
  //     });
  // };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      {/* <UserCard user={user}/> */}
    </div>
  );
}
