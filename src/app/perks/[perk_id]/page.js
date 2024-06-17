export default function PerkPage({ params }) {
    const perk_id = params.perk_id;
    return (
        <div>
            <h1>Perk Page</h1>
            <p>This is the perk page for perk ID {perk_id}.</p>
        </div>
    );
}