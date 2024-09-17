import React, { useState } from 'react';
import { Box, Button, TextField, Modal, Typography } from '@mui/material';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setOpen(true);
    }, 4000);
  };

  return (
    <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>

      <Modal sx={{ mt: 10 }} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 4, bgcolor: 'white', margin: 'auto', width: 300, textAlign: 'center' }}>
          <Typography variant="h6">Form Submitted!</Typography>
          <Button onClick={() => setOpen(false)} variant="contained" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default App;
