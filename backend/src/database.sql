CREATE TABLE worker(
    id serial PRIMARY KEY,
    worker_name VARCHAR(255)
);

CREATE TABLE customer(
    id serial PRIMARY KEY,
    customer_name VARCHAR(255)
);

CREATE TABLE cargo(
    if serial PRIMARY KEY,
    client_id INTEGER,
    total_weight INTEGER,
    total_volume INTEGER,
    number_of_boxes INTEGER,
    condition VARCHAR(255),
    warehouse_place VARCHAR(255),
    FOREIGN KEY (client_id) REFERENCES customer (id)
);