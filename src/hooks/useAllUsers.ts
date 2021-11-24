//customHookは　useから始める
//全ユーザー一覧を取得するカスタムフック
import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";
import axios from "axios";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
        //errorを表示させる。
      })
      .finally(() => {
        setLoading(false);
        //Loadingに関して初期値に戻す
      });
  };
  return { getUsers, userProfiles, loading, error };
};
