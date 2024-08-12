import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1/";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post('user/login', { email, password });
        const token = response.data.body.token;

        const userResponse = await axios.post('user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return { token, user: userResponse.data.body};

      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

  export const changeUsername = createAsyncThunk(
    'user/changeUsername',
    async ({username, token}, { rejectWithValue }) => {
      try {
        const response = await axios.put('user/profile', {userName: username}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return {username: response.data.body.userName};

      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
        state.user = null;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(changeUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.user.userName = action.payload.username;
    })
    .addCase(changeUsername.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {logoutUser } = userSlice.actions;
export default userSlice.reducer;