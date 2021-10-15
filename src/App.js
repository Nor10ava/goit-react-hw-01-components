import "./App.css";
import user from "./components/Social-profile/user.json";
import { Profile } from "./components/Social-profile/profile";
import statisticalData from "./components/Statistics/statistical-data.json";
import { Statistics } from "./components/Statistics/statistics";
import friends from "./components/Friends-list/friends.json";
import { FriendList } from "./components/Friends-list/friendList";
import transactions from "./components/Transaction-history/transaction.json";
import { TransactionHistory } from "./components/Transaction-history/transaction";

function User() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default User;
