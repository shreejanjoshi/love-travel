const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first place',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 place City',
      description:
        'This is a first, amazing place which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second place',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 place City',
      description:
        'This is a first, amazing place which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllPlacesPage(){
    return(
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })}
            </ul>
        </section>
    );
}

export default AllPlacesPage;