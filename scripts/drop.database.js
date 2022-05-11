const dropDatabase = async () => {
  try {
    const db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT
    });

    await db.query(`DROP DATABASE ${DB_NAME}`);
    await db.end();
  } catch (err) {
    console.log(
      `Your environment variables might be wrong. Please double check .env file`
    );
    console.log("Environment Variables are:", {
      DB_PASSWORD,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_PORT
    });
    console.log(err);
  }
};

dropDatabase();
