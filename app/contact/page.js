"use client";

import { useState } from 'react';
import styled from 'styled-components';
import { Container, Input, Select, Textarea, Button, Card } from '../../styles/theme.js';

const ContactSectionWrapper = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.mintCream} 0%, 
    ${({ theme }) => theme.colors.roseDust}20 100%
  );
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.jetBlack};
  text-align: center;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.taupeGrey};
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;


const ContactForm = styled(Card)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.jetBlack};
  margin-bottom: 0.5rem;
`;



export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Form submitted:", formData);

        setTimeout(() => {
            setIsSubmitting(false);
            alert("Thank you for your message! We'll get back to you soon.");
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: 'General Inquiry',
                message: '',
            });
        }, 1000);
    };

    return (
        <ContactSectionWrapper id="contact">
            <Container style={{ width: '50%' }}>
                <SectionTitle>Get in Touch</SectionTitle>
                <SectionDescription>
                    Have questions about our products or need personalized recommendations? We'd love to hear from you!
                </SectionDescription>

                <ContactForm>
                    <FormTitle>Send us a Message</FormTitle>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Subject</Label>
                            <Select
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Product Question">Product Question</option>
                                <option value="Custom Order">Custom Order</option>
                                <option value="Shipping Issue">Shipping Issue</option>
                            </Select>
                        </FormGroup>

                        <FormGroup>
                            <Label>Message</Label>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us how we can help you..."
                                required
                            />
                        </FormGroup>

                        <Button
                            type="submit"
                            variant="secondary"
                            style={{ width: '100%' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </ContactForm>
            </Container>
        </ContactSectionWrapper>
    );
}
