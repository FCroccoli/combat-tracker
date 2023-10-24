import { AddEnemyBoxDisplay } from "./style";

export default function AddEnemyBox() {
  return (
    <AddEnemyBoxDisplay>
      <h2>AddEnemy</h2>
      <div>
        <p>Name: </p> <input type="text" />
      </div>
      <div>
        <p>HP: </p> <input type="number" />
      </div>
      <div>
        <p>AC: </p> <input type="number" />
      </div>
      <div>
        <button>Add</button>
        <button>Clear</button>
      </div>
    </AddEnemyBoxDisplay>
  );
}
