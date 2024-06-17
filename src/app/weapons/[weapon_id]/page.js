export default function WeaponPage({ params }) {
    const weapon_id = params.weapon_id;
    return (
        <div>
            <h1>Weapon Page</h1>
            <p>This is the weapon page for weapon ID {weapon_id}.</p>
        </div>
    );
}