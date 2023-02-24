export function Contacts({ state, deleteContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {state.contacts.map(e => {
          if (!e.name.toLowerCase().includes(state.filter)) {
            return null;
          }

          return (
            <li key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => {
                  deleteContact(e.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
