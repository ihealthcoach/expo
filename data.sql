-- Questionnaire

CREATE TABLE user_fitness_profiles (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    age INT,
    bodytype VARCHAR(255),
    gender VARCHAR(50),
    goal VARCHAR(50),
    height INT,
    level VARCHAR(100),
    weight INT,
    workoutDays INT[]
);

-- Tutorial: https://www.youtube.com/watch?v=AE7dKIKMJy4&list=PL5S4mPUpp4OsrbRTx21k34aACOgpqQGlx&index=1
-- Docs: https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?database-method=sql

--------------------------------
-- Set up the database schema --
--------------------------------

-- https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?database-method=sql#set-up-the-database-schema

-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage/security/access-control#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');

create policy "Anyone can update their own avatar." on storage.objects
  for update using (auth.uid() = owner) with check (bucket_id = 'avatars');

-- Supabase

create table
  public.user_profile (
    -- users table
    id uuid not null,
    firstname text null,
    lastname text null,
    email text null,
    avatar_url text null,
    country text null,
    language text null,
    profile_id REFERENCE profile,
    progress_id REFERENCE progress,
    nutrition_id REFERENCE nutrition,

    -- profile table
    id uuid not null,
    dob date null,
    body_type text null,
    gender text null,
    main_goal text null,
    height smallint null,
    level text null,
    workout_days smallint[] null,
    experience text null,
    preferred_workout_location text null,
    activity_level text null,
    injuries boolean null,
    injuries_list text[] null,
    steps_goal text null,

    -- progress table
    id uuid not null,
    weight smallint null,
    fat_percentage text null,
    muscle_mass text null,
    bmi text null,
    body_measurements_thigh text null,
    body_measurements_chest text null,
    body_measurements_stomach text null,
    body_measurements_glutes text null,
    steps_current text null,
    body_progress_image_front text null,
    body_progress_image_back text null,
    body_progress_image_side text null,


    -- nutrition table
    id uuid not null,
    meals text null,
    meal_variation text null,
    food_allergies boolean null,
    food_allergies_items text[] null,
    food_items_avoid text[] null,
    preferred_food_items text[] null,
    calories_per_day text null,
    protein_per_day text null,
    fat_per_day text null,
    carbohydrates_per_day text null,
    created_at timestamp with time zone null,
    -- profile_id REFERENCE profile smallint not null,
  ) tablespace pg_default;

    -- constraint user_profile_pkey primary key (profile_id),
    -- constraint user_profile_user_id_key unique (user_id),
    -- constraint user_profile_username_key unique (username),
    -- constraint user_profile_user_id_fkey foreign key (user_id) references auth.users (id),
    -- constraint username_length check ((char_length(username) >= 3))