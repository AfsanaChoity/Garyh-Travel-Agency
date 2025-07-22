import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How is RVnBo different from camping apps?',
    answer: 'RVnBo focuses on verified off-grid stays, unlike traditional camping apps.',
  },
  {
    question: 'Do I need electricity hookups?',
    answer: 'Many spots do not require electricity hookups, but options vary.',
  },
  {
    question: 'Can I stay on raw land?',
    answer: 'Yes, as long as the host permits and local regulations allow it.',
  },
  {
    question: 'Is it legal and safe?',
    answer: 'All stays listed are verified for safety and legal compliance.',
  },
  {
    question: 'Can I cancel a spot?',
    answer: 'Yes, cancellation policies are listed on each stay’s details.',
  },
];

export default function FAQs() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', mt: 4 }}>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            mb: 2, // 👈 Add bottom margin
            borderRadius: '8px',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ minHeight: 56 }}
          >
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '0.85rem', color: '#555' }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
