interface Movie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}

(() => {

  function getMovies( id: string ) {
      console.log({ id });
  }

  function getMovieCast( movieId: string ) {
      console.log({ movieId });
  }

  function getActor( id: string ) {
      console.log({ id });
  }
  
  function createMovie({ title,description,rating, cast }: Movie) {
      console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor');
      return true;        

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    if (isDead) return 1500;

    if(isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
}
  


})();
